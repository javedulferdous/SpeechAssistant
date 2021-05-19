// CREATED ON 9-20-16 :: N. ANTONOPULOS - DEV ::
// FF-FEED AD
//------------------------------------------
//STEP 1 : CHECK TO MAKE SURE IA VARS ARE LOADED
//STEP 2 : LOAD FEED
//STEP 3A : IF FEED LOADS CHECK ITEMS AGAINST INDIVIDUAL PRODUCT IA VAR SETTINGS
//STEP 3B : IF FEED DOES NOT LOAD RUN DEFUAL LOGIC
//STEP 4A : LOAD IMAGES
//STEP 5 : ADD LISTENERS
//STEP 5 : RUN AD
//------------------------------------------
//// GLOBAL VARS //////
var adW = 160;
var adH = 600;

var products_info = [];
var delayTime = 2.8;
var carousel_speed = 0.5;

//booleans
var isDefault = false;
var feedReturned = false;
var imagesLoaded = false;
var block_click = false;
var killAutoCar = false;
var useSplash = false;

var powerFeedImg = false;


// CHANGES 2020.Oct.08 - for the christmasIntroFrame preload
var imgArray = [];
var imgCtr = 0;

var creative = {
    //SET UP
	init : function(){
		myFT.addEventListener("instantads", function() {
			creative.lg('instantads are loaded---------');
            creative.createCTA();
            //arr for default images to load
            var ar = [{ia: myFT.instantAds.best_buy_logo, id:"bb_logo"}];
            ar.push({ia: myFT.instantAds.footerBackground_image, id:"footer_bg"});
            ar.push({ia: myFT.instantAds.headerBackground_image, id:"header_bg"});
            ar.push({ia: myFT.instantAds.VPE_image, id:"vpe_hold"});
            ar.push({ia: myFT.instantAds.arrow_left, id:"arrow_left"});
            ar.push({ia: myFT.instantAds.arrow_right, id:"arrow_right"});

            //check to see if SPLASH screen is needed
            if(myFT.instantAds.use_intro_frame.toLowerCase() === 'yes'){
                useSplash = true;
                ar.push({ia: myFT.instantAds.intro_frame_image, id:"splash_screen"});
                splash_screen.style.display = 'block';

                creative.lg("USE SPLASH SCREEN")

            }else {
                TweenLite.set(ChristmasIntroFrame, {
                    opacity: 0,
                    display: "none"
                });
            }
            var ftFeed = new FTFeed(myFT);
            ftFeed.getFeed(creative.feedLoaded, creative.feedLoadError);
            //
            creative.loadImgs(ar, 'none');
            TweenLite.delayedCall(.05, creative.checkLoads);
            //
            legal_txt.innerHTML = myFT.instantAds.legal_text;
            var a = myFT.instantAds.legal_text_xyOffset.split(',');
            var lft = (14)+Number(a[0])+"px";
            legal_txt.style.left = lft;
            legal_txt.style.top = (584 + Number(a[1]))+"px";
		});
	},
    //FEED LOAD/ERROR
    feedLoaded : function(feedItems, feedUrl) {
        creative.lg("Feed URL: " + feedUrl);
        creative.lg(feedItems);
        feedReturned = true;
        //check to make sure num of products matches feed length
        var nop = (feedItems.length < parseInt(myFT.instantAds.max_number_of_products)) ? feedItems.length : parseInt(myFT.instantAds.max_number_of_products);
        //creative.lg("nop : " + nop);
        var prod_logo_imgURL = myFT.instantAds.product_brand_logo;
        var imgA = [];
        var logoA = [];
        for(var i = 0; i< nop; i++){
            var up1 = i+1;
            //create slide
            var prod = document.createElement('div');
            prod.id = i;
            prod.className = 'prod';
            carousel.appendChild(prod);
            //create slide inner divs
           // prod.innerHTML = "<div class='prod_img_hold'> <img id='p_img_"+i+"' class='prod_img'/></div><div class='prod_info'><div class='prod_desc'></div><div class='prod_price'></div><div id='p_logo_"+i+"' class='prod_logo'></div></div>";
            var prod_img_hold = document.createElement('div');
            prod_img_hold.className = 'prod_img_hold';
            prod.appendChild(prod_img_hold);
            var p_img = document.createElement('img');
            prod_img_hold.className = 'prod_img_hold';
            p_img.id = 'p_img_'+i;
            prod_img_hold.appendChild(p_img);
            //holds price and description
            var prod_info = document.createElement('div');
            prod_info.className = 'prod_info';
            prod.appendChild(prod_info);
            prod_desc = document.createElement('div');
            prod_desc.className = 'prod_desc';
            prod_info.appendChild(prod_desc);
            var prod_price = document.createElement('div');
            prod_price.className = 'prod_price';
            prod_info.appendChild(prod_price);
            //BRAND LOGO
            var prod_logo = document.createElement('img');
            prod_logo.id = "p_logo_"+i;
            prod_logo.className = 'prod_logo';
            container.appendChild(prod_logo);
            if(i===0){
                prod.style.left = "0px";
                prod_logo.style.opacity = "1";
            }

            //add the item image
            //var adjustImg = feedItems[i].image+"&h=220";

            //console.log("feed item info: " + adjustImg);


            powerFeedImg = false;
            creative.lg("pf? "+feedItems[i].powerfeeds_image);

                if (feedItems[i].powerfeeds_image != null ){
                    console.log("YES powerfeed image");
                    powerFeedImg = true;
                    //
                } else {
                    console.log("NO powerfeed image");
                }

            if (powerFeedImg) {
                var supplyImg = feedItems[i].powerfeeds_image;
            } else {
                var supplyImg = feedItems[i].image;
            }

            //1 - check to see if override is needed
            var imgURL = (myFT.instantAds["product_image_"+up1].indexOf('blank') > -1) ? supplyImg : myFT.instantAds["product_image_"+up1]  ;

            if (powerFeedImg) {
                var imgURLNew = imgURL + "&w=200&h=200";
                imgA.push({ia:imgURLNew, id: p_img.id});

            } else {
                imgA.push({ia:imgURL, id: p_img.id});
            }

            console.log("url " + imgURL);
            //creative.lg("imgA[i].id :: ",imgA[i].id );
            //creative.lg("imgURL : ",imgURL);
            var ct_url = (myFT.instantAds["product_url_"+up1].indexOf('useFeed') > -1) ? feedItems[i].url : myFT.instantAds["product_url_"+up1]  ;
            //creative.lg("ct_url : ",ct_url);
            name = (myFT.instantAds["product_copy_"+up1].indexOf('useFeed') > -1) ? feedItems[i].name : myFT.instantAds["product_copy_"+up1]  ;
           // creative.lg("name : ",name);
           if (myFT.instantAds["product_copy_"+up1].indexOf('useFeed') > -1) {

            sepName = creative.textSeperate(name);
            prod_desc.innerHTML = sepName;

            console.log('useFeed Shown');
            var ob = creative.checkMaxChar(sepName);
            chkName2 = ob.str;
            prod_desc.innerHTML = chkName2;
            console.log('ob.longDesc: '+ob.longDesc);
            creative.fontResize(prod_desc, ob.longDesc );
           } else {

            prod_desc.innerHTML = name;

            console.log('no Feed Copy: '+prod_desc);
            var longDesc = false;

            if (prod_desc.clientHeight > 140) {
                longDesc = true;
            }
            //creative.fontResizeFromIA(prod_desc, longDesc);

           }
            //price 1- check override
            var fp = (feedItems[i].pricerestriction === null || "null") ? feedItems[i].saleprice : "SEE PRICE<br>IN CART";
            var is_irc = (feedItems[i].pricerestriction === null || "null") ? false : true;

           // creative.lg('feed price fp :: ',fp);
            //2 - IF override is 'yes' than salePrice is one to use IF 'no' than use what is defined above
            fp = (myFT.instantAds["priceRestriction_override_"+up1] === 'yes') ? feedItems[i].saleprice : fp;
            //3 - IF IA var is set to 'useFeed' than use fp else use IA var
            var price = (myFT.instantAds["product_sale_price_"+up1].indexOf('useFeed') > -1) ? fp : myFT.instantAds["product_sale_price_"+up1]  ;
            price = price.toString();
            if(is_irc){
                //  creative.lg('price :: ',price.split('.'));
                prod_price.innerHTML = "<span class='irc'>"+fp+"</span>";
            }else{
                //if no decimal add it plus 00
                price = (price.indexOf('.') > -1) ? price : price+".00";
                //  creative.lg('price :: ',price.split('.'));
                // prod_price.innerHTML = "<sup>$</sup>"+price.split('.')[0]+"<sup>"+price.split('.')[1]+"</sup>";
							//	prod_price.innerHTML = "<span class='dollarSign'>$</span>"+price.split('.')[0]+"<sup>"+price.split('.')[1]+"</sup>";
								prod_price.innerHTML = "<span class='dollarSign'>$</span>"+ price;
            }



            //OFFSET THE ITEMS //index 0 is the name index 1 is the price, just y offset
            var np_off = myFT.instantAds['product_copy_price_yOffset_'+up1].split(',');
            prod_desc.style.top = (50+Number(np_off[0]))+"px";
			
			//PRODUCT PRICE LOGIC 2020.11.12
			//IF THERE'S NO BRAND LOGO, DO THIS
			if(myFT.instantAds.product_brand_logo.indexOf("blank") > -1) {
			   prod_price.style.top = (150 + Number(np_off[1])) + "px";
			}
			//IF THERE'S BRAND LOGO, DO THIS
			else {
				prod_price.style.top = (145 + Number(np_off[1])) + "px";
			
			}
            //
            var prod_logoURL = (myFT.instantAds["product_logo_"+up1].indexOf('blank') > -1) ? prod_logo_imgURL : myFT.instantAds["product_logo_"+up1];
            logoA.push({id: prod_logo.id,ia:prod_logoURL});
            products_info.push({id:i, prod:prod, url:ct_url, p_logo:prod_logo });
        }
        var prod_btn = document.createElement('div');
        prod_btn.className = 'prod_btn';
        prod_btn.id='product_btn';
        carousel.appendChild(prod_btn);
      //  creative.lg(imgA.length)
        creative.loadImgs(logoA, 'none');
        creative.loadImgs(imgA, creative.resizeImgs);


    },

    feedLoadError : function(errorMsg, feedUrl) {
        creative.lg(errorMsg);
        feedReturned = true;
        default_img.style.display = 'block';
        default_img.onerror = function(e) {
            default_img.src = "images/blank.gif";
        };
            default_img.src = myFT.instantAds.default_fallback_image;
        myFT.applyButton(default_img, creative.onCT_7);
        myFT.applyButton(splash_screen, creative.onCT_7);
        // CHANGES 2020.Oct.08 - hide Christmas Intro Frame if feed fail
        TweenLite.set([ChristmasIntroFrame,arrow_left,arrow_right], {
            opacity: 0,
            display: "none",
            autoAlpha: 0
        });

        TweenLite.to(container, 0.5, {opacity:1});
				console.log("Tracking FeedFail");
				myFT.tracker("FeedFail_Image");
    },
    
    goChristmasIntroFrame : function() {
        // CHANGES   2020.Oct.08 - new animation for the Christmas Intro Frame    
        
        var christmasTL = new TimelineMax();
        
        christmasTL.set(ChristmasIntroFrame, {
            opacity: 1 
        });
        
        christmasTL.set(["#CI_Frame3CopyCont","#CI_Frame3Copy", "#giftBox", "#sparklesCont > div", "#CI_Frame2CopyCont", "#CI_Frame2Copy", "#mountainBack", "#mountainFront", "#bestBuyLogo"], {
            rotation: 0.1,
            perspective: '1000px',
            force3D: true,
        }); // this line is for preventing most of the jittering issues on every browser
        
        christmasTL.from(bestBuyLogo, 0.3, {
            scale: 0.9,
            opacity: 0
        });
        
        christmasTL.to(mountainBack, 2, {
            scale: 1.2,
            x: -20,
            ease: "none"
        }, "-=0.3");
        christmasTL.to(mountainFront, 2, {
            scale: 1.3,
            x: 20,
            ease: "none"
        }, "-=2");
        
        
        christmasTL.to(mountainBack, 0.5, {
            scale: 2,
            x: -500, 
            ease: "power1.in"
        }, "-=0.5");
        christmasTL.to(mountainFront, 0.5, {
            scale: 2,
            x: 500, 
            ease: "power1.in"
        }, "-=0.5");
        christmasTL.to(bestBuyLogo, 0.5, {
            scale: 0.63,
            x: -3,
            y: -96,
            z: 0.01, // give these elements a translateZ so that they will appear sharper
        }, "-=0.5");
        
        
        
        christmasTL.addLabel("frame2", "<"); // insert a label when the best buy logo starts to go to the top right corner
        
        christmasTL.from(giftBox, 0.5, {
            scale: 0,
            x: -115,
            y: -60
        },"frame2");
        christmasTL.from(CI_Frame2CopyCont, 0.5, {
            scale: 0,
            x: 50
        },"-=0.5");
        
        
        
        christmasTL.to("#sparklesCont > div", 0.5,{
            stagger: {
                from: "edges",
                each: 0.1,
                onStart: function () {
                    creative.animateIndividualSparkle(this._targets[0]);
                }
            }
        },"-=0.3");
        
        christmasTL.to(giftBox, 2, {
            x: 10,
            ease: "none"
        },"-=0.8");
        
        
        
        christmasTL.to(CI_Frame2CopyCont, 2, {
            x: -10,
            ease: "none"
        },"-=2");
        
        christmasTL.addLabel("frame3", ">-0.5"); // insert a label a little bit after when the gift box finishes to slowly pan 
        
        
        christmasTL.to(giftBox, 0.5, {
            scale: 2,
            x: 300,
            y: 100,
            ease: "power1.out"
        },"frame3");
        christmasTL.to(CI_Frame2CopyCont, 0.5, {
            scale: 2,
            x: -300,
            y: -100,
            ease: "power1.out"
        },"frame3");
        christmasTL.from(CI_Frame3CopyCont, 0.5, {
            scale: 0
        }, "-=0.5");
        
        
        christmasTL.add( function(){
//            christmasTL.pause(); 
        });
        
        christmasTL.to(CI_Frame2CopyCont, 0.5, {
            scale: 2,
            x: -600,
            y: -200,
            opacity: 0,
            ease: "power1.out"
        }, "-=.5");
        
        christmasTL.to(CI_Frame3CopyCont, 3, {
            scale: 1.1,
            ease: "none"
        });
        
        christmasTL.addLabel("endFrame", ">-1"); // insert a label when the endframe copy stops moving then adjust it a little backwards
        
        christmasTL.to(ChristmasIntroFrame, 0.5, {
            opacity: 0
        },"endFrame");
        christmasTL.to(CI_Frame3CopyCont, 0.5, {
            scale: 10,
        },"endFrame");
        christmasTL.to(ChristmasIntroFrame, 0, {
            display: "none",
            onComplete: function() {
                // start carousel
                if (products_info.length > 1 ) {
                    TweenLite.delayedCall(2,creative.autoCarousel);
                }
            }
        });
        
    },
    
    animateIndividualSparkle : function(sparkleElem) {
        var directions = [[1,-10],[2,-5],[-7,-7],[5,-10],[1,-6],[-1,-4],[0,-4]]; // control where each individual sparkle will go by customising each XY. For example: Array[1] will control sparkle1. So on and so forth
        
        var ctrTemp = sparkleElem.id.match(/\d+$/).toString(); // use the sparkle div ID as the ctr
        
        gsap.to(sparkleElem, 3, { // this gives the direction where a sparkle should go to
            x: directions[ctrTemp-1][0],
            y: directions[ctrTemp-1][1],
        })
        
        var sparkleTempTl = new TimelineMax();
        // individually animate the sparkles
        sparkleTempTl.to(sparkleElem, 0.4, {
            opacity: 0.2 
        });
        sparkleTempTl.to(sparkleElem, 0.4, {
            opacity: 1 
        });
        sparkleTempTl.to(sparkleElem, 0.4, {
            delay: 0.2,
            opacity: 0.2 
        });
        sparkleTempTl.to(sparkleElem, 0.4, {
            delay: 0.2,
            opacity: 0
        });
    },


    goBanner : function() {
        creative.lg('goBanner');
        var useA = false;
        
        // CHANGES 2020.Oct.08 - icon must be retina. Reduce size by half.
        giftBox.style.width = (giftBox.naturalWidth / 2) + "px";
        
        if(products_info.length>1)
        {
            useA = true;
            arrow_left.style.display = 'block';
            arrow_right.style.display = 'block';
        }


        if(!isDefault){
            if(useSplash){
                non_splash.style.display = 'none';
                var dt = Number(myFT.instantAds.intro_frame_time);
                TweenLite.to(splash_screen,0,{display:'none', delay:dt});

                TweenLite.to(whiteBlock,0,{display:'block', delay:dt, onComplete:function(){non_splash.style.display ='block';}});
                if(useA){
                    creative.lg('fade id')
                    TweenLite.to(arrow_left,.23,{opacity:1, delay:delayTime+.95});
                    TweenLite.to(arrow_right,.23,{opacity:1, delay:delayTime+.95});
                }
                TweenLite.to(whiteBlock,0.8,{opacity:0, delay:(dt +.02)});
                TweenLite.delayedCall((dt+delayTime),creative.autoCarousel);
            }else{
                if(useA){
                    TweenLite.to(arrow_left,.23,{opacity:1, delay:.95});
                    TweenLite.to(arrow_right,.23,{opacity:1, delay:.95});
                }
                TweenLite.from(header_hold,0.42,{opacity:0, top:'-73px', ease : Sine.easeOut, delay:.65});
                TweenLite.from(footer_hold,0.45,{opacity:0, top:'100px', ease : Sine.easeOut, delay:.5});
                TweenLite.from(cta_hold,0.5,{ top: "+=190", ease : Sine.easeOut, delay:.39});
                TweenLite.from(carousel,0.45,{ left: "-270", ease : Sine.easeOut, delay:.5});
                var p_logo = products_info[0].p_logo;
                TweenLite.from(p_logo,0.45,{ left: "-270", ease : Sine.easeOut, delay:.5});

                if (products_info.length > 1 ) {
                    TweenLite.delayedCall(3.5,creative.autoCarousel);
                }
            }
        }
        TweenLite.to(container, 0.5, {
            opacity:1,
            delay:.5,
            onStart: function() {
                if(useSplash){
                    creative.goChristmasIntroFrame();
                }
            }
        });
    },
    //CAROUSEL ACTIONS
    autoCarousel : function() {
        if(!killAutoCar){
            creative.onArrowClick('autoCarousel');
        }
    },
    resetBlock : function(){
        block_click = false;
    },

    onArrowClick : function(e) {
        var event_name;
        var newID;
        //creative.lg(e);
        //if called from autoCarousel set event name to arrow_right
        if(e === 'autoCarousel'){
            newID = products_info[1].id;
         //   event_name = "arrow_right";
        }else {
            //	alert(e.target.id);
            event_name = e.target.id;
            //	alert(newID);
            newID = e.target.id;
            killAutoCar = true;
        }
        var elm;//element to slide out
        var elm2;//element to slide in

        var ls = adW+"px";//left slide number
        var rs = -adW+"px";//right slide number
        if(!block_click && newID != products_info[0].id){
            var p_logo_1 = products_info[0].p_logo;

            //creative.lg("end Atuo :: ",endAuto.toString()," newID :: ",newID);
            block_click = true;
            //	TweenLite.delayedCall(carousel_speed, creative.resetBlock);
            creative.lg("EVENT NAME IS :: ",event_name)
            if(event_name == 'arrow_right'){
                //
                myFT.tracker("right_arrow_clicked",null,"right_arrow_clicked");
                elm = products_info[0].prod;
                TweenLite.to(elm, carousel_speed,{left:rs});
                elm = products_info.shift();
                products_info.push(elm);
                elm2 = products_info[0].prod;
                elm2.style.left = ls;
                TweenLite.to(elm2, carousel_speed,{left:"0px", ease : Sine.easeOut, onComplete:creative.resetBlock});
            }else{
                //creative.lg(event_name);
                if(event_name === "arrow_right"  ) {
                    myFT.tracker("left_arrow_clicked", null, "left_arrow_clicked");
                }
                elm = products_info[0].prod;
                TweenLite.to(elm, carousel_speed,{left:ls});
                elm2 = products_info.pop();
                elm2.prod.style.left = rs;
                TweenLite.to(elm2.prod, carousel_speed,{left:"0px", ease : Sine.easeOut, onComplete:creative.resetBlock});
                products_info.unshift(elm2);

            }
            var p_logo_2 = products_info[0].p_logo;
            TweenLite.to(p_logo_1,.1,{opacity:0});
            TweenLite.to(p_logo_2, .3,{opacity:1, delay:carousel_speed});
            if(!killAutoCar && products_info[0].id != "0" ){
                //  creative.lg('curr_car[0].id :: ',curr_car[0].id);
                TweenLite.delayedCall(delayTime, creative.autoCarousel );
            }

        }
    },

    //LOAD IMAGES
    loadImgs : function(allImgs, returnFunc){
        var tmpCnt = 0;
        //creative.lg('retrunFunc is ::  ',retrunFunc);
        creative.lg(allImgs)
        for(var i = 0; i < allImgs.length; i++){
          //  creative.lg("document.getElementById(allImgs[i].ia :: ",document.getElementById(allImgs[i].id));
            var elm = document.getElementById(allImgs[i].id);
            elm.onerror = function(e){
                creative.lg('IMAGE LOAD ERROR :: ',this.id);
                if(returnFunc !== 'none'){
                    e.target.src = "1x6_prod_backup_newBrand.png";
                }else{
                    e.target.src = "images/blank.gif";
                }
            };
            elm.onload = function(e){
                tmpCnt++;
                if(returnFunc !== 'none' && tmpCnt === allImgs.length) {
                    creative.lg('FEED/PRODUCT IMAGES HAVE LOADED');
                    returnFunc(allImgs);
                }
            };
            elm.src = allImgs[i].ia;
        }
    },
    //RESIZE IMAGES
    resizeImgs : function(a){
        for(var i =0; i < a.length; i++){
           // creative.lg('resize ',i);
            var elm = document.getElementById(a[i].id);
            if(elm.clientWidth >= elm.clientHeight){
                elm.style.width = "130px";
            }else{

                elm.style.height = "130px";
            }
         //   if(a[i])
        }
        imagesLoaded = true;
    },
    //CLICK TAGS
    onProduct_CT : function(e){
        var url = products_info[0].url;
        var id = products_info[0].id+1;
        myFT.clickTag(id, url);
    },
    onCT_6 : function(){
        myFT.clickTag(6);
    },
    onCT_7 : function(){
        myFT.clickTag(7, myFT.instantAds.intro_frame_URL);
    },
    //ADD LISTENERS & HELPER FUNCTIONS
    addListeners : function() {
        if(useSplash){
            myFT.applyButton(splash_screen,creative.onCT_7 );
            myFT.applyButton(ChristmasIntroFrame,creative.onCT_7 );

        }
        container.appendChild(footer_btn);

        container.appendChild(splash_screen);
        container.appendChild(border);
        //
        myFT.applyButton(cta_bg, creative.onProduct_CT);
        myFT.applyButton(footer_btn, creative.onProduct_CT);
        myFT.applyButton(header_btn, creative.onProduct_CT);

        myFT.applyButton(product_btn, creative.onProduct_CT);
        myFT.applyButton(container, creative.onProduct_CT);

        myFT.applyButton(arrow_left, creative.onArrowClick);
        container.appendChild(arrow_left);
        myFT.applyButton(arrow_right, creative.onArrowClick);
        container.appendChild(arrow_right);
        container.appendChild(header_btn);
        //container.appendChild(splash_screen)
        //
        creative.preloadChristmasIntroFrame();
    },
    
    preloadChristmasIntroFrame : function() {
        // CHANGES 2020.Oct.08 - preload new Christmas Intro Frame Images

        CI_Frame2Copy.innerHTML = myFT.instantAds.IntroHeadline1;
        CI_Frame3Copy.innerHTML = myFT.instantAds.IntroHeadline2;

        sparkle1.innerHTML = sparkle.circle; //these set what sparkle type each div will get
        sparkle2.innerHTML = sparkle.flake;
        sparkle3.innerHTML = sparkle.flake;
        sparkle4.innerHTML = sparkle.flower;
        sparkle5.innerHTML = sparkle.flake;
        sparkle6.innerHTML = sparkle.flower;
        sparkle7.innerHTML = sparkle.flake;
        
        
        creative.preloadChristmasIntroFrameImage(document.getElementById("bestBuyLogo"), "images/christmasIntroAssets/best_buy_logo.png");
        creative.preloadChristmasIntroFrameImage(document.getElementById("mountainBack"), "images/christmasIntroAssets/mountain_back.png");
        creative.preloadChristmasIntroFrameImage(document.getElementById("mountainFront"), "images/christmasIntroAssets/mountain_front.png");
        creative.preloadChristmasIntroFrameImage(document.getElementById("giftBox"), myFT.instantAds.Icon1);
        creative.preloadChristmasIntroFrameImage(document.getElementById("icon2"), myFT.instantAds.Icon2);
        creative.checkChristmasIntroFrameImages();
    },
    
    preloadChristmasIntroFrameImage : function(elem, img){
        imgCtr++;
        var temp = new Image();

        temp.src = img;
        temp.onload = function (e) {
            imgArray.push(temp);
        }
        elem.src = temp.src;
    },
    checkChristmasIntroFrameImages : function() {
        var checkImageInterval = setInterval(function () {
            if (imgCtr == imgArray.length) {
                creative.goBanner();
                clearInterval(checkImageInterval);
            }
        }, 500);
    }, 
    createCTA : function(){
        cta_copy.innerHTML = myFT.instantAds.cta_text;
        cta_copy.style.color = myFT.instantAds.cta_size_copyColor_backColor.split(',')[1];
        cta_copy.style.fontSize = myFT.instantAds.cta_size_copyColor_backColor.split(',')[0];
        var w = cta_copy.clientWidth+16;
        cta_copy.style.top = ((cta_bg.clientHeight-cta_copy.clientHeight)/2)+"px";
        //
        cta_bg.style.width = w+"px";
        cta_bg.style.backgroundColor = myFT.instantAds.cta_size_copyColor_backColor.split(',')[2];
        cta_copy.style.width =  w+"px";
        //
        cta_hold.style.top = (432+Number(myFT.instantAds.cta_yOffset))+"px";

    },
    checkLoads : function(){
        if(feedReturned && imagesLoaded){

           creative.addListeners();
        }else{
            TweenLite.delayedCall(.05, creative.checkLoads);
        }
    },

    checkMaxChar : function(str){

        //creative.lg("chkHeightChar: "+prod_desc.clientHeight);
        var longDesc = false;
        var cutNum = 78;
        if (prod_desc.clientHeight > 75) {
            longDesc = true;
        }

        if(str.length > cutNum){
            var rest = str.slice(0, cutNum-3);

            if(rest.charAt(cutNum-4) == ' '){
                rest = rest.slice(0, cutNum-3);
                rest = rest+'...';
            }else{
                rest = rest+'...';
            }
            return {str: rest, longDesc: longDesc};
        }else{
            return {str:str, longDesc:longDesc};
        }
    },

    checkMaxCharResize : function(str){

        var cutNum2 = 88;

        if(str.length > cutNum2){
            var rest = str.slice(0, cutNum2);

            if(rest.charAt(cutNum2-4) == ' '){
                rest = rest.slice(0, cutNum2-3);
                rest = rest+'...';
            }else{
                rest = rest+'...';
            }
            return rest;
        }else{
            return str;
        }
    },

    textSeperate : function(val) {
        console.log("TS: " + val );
        var separators = ['|', '/'];
        var result="";
        flag=true;
        for(var i=0;i<val.length;i++) {
            flag=true;
            for(var j=0;j<separators.length;j++) {
                if(val[i]==separators[j]) {
                    result += " " + val[i] + " ";
                    flag=false;
            }
        }
        if(flag) {
            result +=val[i];
        }
    }
    return(result);
    },


    fontResize : function (el,longDesc){
        CSSFontSize = window.getComputedStyle(el,null).getPropertyValue("font-size");
        CSSLineHeight = window.getComputedStyle(el,null).getPropertyValue("line-height");
        // var currFontSize = (parseInt(CSSFontSize, 10));
        if(longDesc){
            el.style.fontSize = (parseInt(CSSFontSize, 10) - 1) + "px";
            el.style.lineHeight = (parseInt(CSSLineHeight, 10) - 1) + "px";

            chkNameResize = creative.checkMaxCharResize(name);
            el.innerHTML = chkNameResize;
        }
    },


    lg : function(msg){
        if(window.console){
            console.log(msg);
        }
    }
};

window.onload = function() {
	creative.lg('window.onload----------');

};
creative.init();

from init import *

def evaluation_process():
    csv_df = pd.read_csv("final_2.csv")
    X = csv_df[['search_innertext','search_attribute','Number_of_search_word','search_button_attribute_value','is_button']]
    y = csv_df[['sClass']]
    filtered_one = csv_df[csv_df['sClass'] == 1] 
    filtered_zero = csv_df[csv_df['sClass'] == 0] 
    f_o = filtered_zero.sample(n=209,replace=False)
    y1 = pd.concat([filtered_one, f_o], axis=0)
    x_2 = y1[['search_innertext','search_attribute','Number_of_search_word','search_button_attribute_value','is_button']]
    y_2 = y1[["sClass"]]
    X_train,X_validation, Y_train, Y_validation = model_selection.train_test_split(x_2,y_2,test_size=0.20)
    models = []
    #models.append(('LogisticRegression', LogisticRegression()))
    #models.append(('KNN', KNeighborsClassifier()))
    models.append(('SVM', svm.SVC(kernel='rbf')))
    results = []
    names = []
    print("================================================================")
    for name, model in models:
        kfold = KFold(n_splits=3, random_state=0)
        clf = model.fit(X_train, Y_train)
        cv_results = cross_val_score(model, X_train, Y_train, cv=kfold, scoring=make_scorer(classification_report_with_accuracy_score))
        results.append(cv_results)
        names.append(name)
        #print("================================================================")
        #print("Average scores of the estimator for each run of the cross validation.")
        #msg = "Testing score for %s: is %f" % (name, cv_results.mean()*100)
        #print(msg)
        print("================================================================")
        #print("The set of labels predicted for a sample must exactly match the corresponding set of labels in y_true.")
        print("Accuracy for %s is %f" % (name , accuracy_score(Y_validation, model.predict(X_validation))*100))
        print("================================================================")
        prediction = clf.predict(X_validation)
        print ('Recall:', recall_score(Y_validation, prediction))
        print ('Precision:', precision_score(Y_validation, prediction) )  
        fig = PLT.figure()
        ax1 = fig.add_subplot(211)
        ax1.plot(cv_results)
        PLT.show()

def classification_report_with_accuracy_score(y_true, y_pred):
    target_names = ['Class 0', 'Class 1']
    print("--------------------------------------------------------")
    print(metrics.classification_report(y_true, y_pred, digits=2, target_names=target_names))
    #print(confusion_matrix(y_true, y_pred))
    tp, fn, fp, tn = confusion_matrix(y_true, y_pred).reshape(-1)
    print('Outcome values : \ntp, fn, fp, tn\n', tp, fn, fp, tn)
    return accuracy_score(y_true, y_pred)

def main():
    evaluation_process()

if __name__ == "__main__":
    main()
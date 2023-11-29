import joblib
import os


# classifier path
classifier_path = os.path.join( os.path.dirname( __file__ ), '../models/category_classifier_model.joblib' )
# tfidf vectorizer path
tfidf_vectorizer_path = os.path.join( os.path.dirname( __file__ ), '../models/tfidf_vectorizer.joblib' )

# Load the saved model and TF-IDF vectorizer
loaded_classifier = joblib.load(
        classifier_path
)
loaded_tfidf_vectorizer = joblib.load( tfidf_vectorizer_path )

# Example usage after loading
input_word = input( "Enter a word: " )
tfidf_word = loaded_tfidf_vectorizer.transform( [ input_word ] )
result = loaded_classifier.predict( tfidf_word )
print( f"The word '{input_word}' is classified into the category: {result[ 0 ]}" )

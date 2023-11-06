from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import json

def predictpl(image_bytes):
    model = load_model("model\\model_v1.h5")
    plant_class_labels = json.loads(open("model\\plant_class_labels.json").read())
    # Preprocess the image
    img = image.load_img(image_bytes, target_size=(64, 64))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)

    # Make a prediction
    prediction = model.predict(img_array)
    class_labels = {v: k for k, v in plant_class_labels.items()}
    predicted_class_index = np.argmax(prediction, axis=1)
    predicted_class_label = class_labels[predicted_class_index[0]]

    return predicted_class_label

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import numpy as np
import io
from model.predictpl import predictpl


@csrf_exempt
def index(request):
    return JsonResponse({"status": True, "message": "Sanjeevani server is live"})


@csrf_exempt
def predict(request):
    if request.method == "POST":
        try:
            req_img = request.FILES["image"]

            # Read the image data from the request
            image_data = req_img.read()

            # Save the image data to a BytesIO object
            image_bytes = io.BytesIO(image_data)

            predicted_class_label = predictpl(image_bytes)

            return JsonResponse(
                {
                    "status": True,
                    "response": f"This plant is {predicted_class_label}",
                    "content": "text",
                }
            )
        except Exception as e:
            return JsonResponse(
                {
                    "status": False,
                    "response": f"Something went wrong : {e}",
                    "content": "text",
                }
            )


@csrf_exempt
def chat(request):
    if request.method == "POST":
        query = request.POST.get("query", "")

        return JsonResponse(
            {
                "status": True,
                "response": f"Hello there how can I help you today ?",
                "content": "text",
            }
        )

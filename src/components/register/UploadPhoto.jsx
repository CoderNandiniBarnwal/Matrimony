import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cropper from "react-easy-crop";

// Generate the cropped image using Canvas
const getCroppedImage = (imageSrc, pixelCrop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Could not create canvas context"));
        return;
      }

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Could not crop image"));
            return;
          }

          resolve(blob);
        },
        "image/jpeg",
        0.92
      );
    };

    image.onerror = () => reject(new Error("Could not load image"));
    image.src = imageSrc;
  });
};

function UploadPhoto() {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [showCropper, setShowCropper] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Release temporary image URLs when they are replaced or component unmounts
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a JPG, PNG, or WEBP image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Photo size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setPhoto(file);
    setPreview(imageUrl);

    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    setShowCropper(true);

    // Allows selecting the same file again
    e.target.value = "";
  };

  const handleCropComplete = (_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const handleApplyCrop = async () => {
    if (!preview || !croppedAreaPixels) {
      alert("Please adjust your image before applying the crop.");
      return;
    }

    try {
      const croppedBlob = await getCroppedImage(
        preview,
        croppedAreaPixels
      );

      const croppedFile = new File(
        [croppedBlob],
        "profile-photo.jpg",
        { type: "image/jpeg" }
      );

      const croppedPreview = URL.createObjectURL(croppedBlob);

      setPhoto(croppedFile);
      setPreview(croppedPreview);
      setShowCropper(false);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (error) {
      console.error("Image crop failed:", error);
      alert("Unable to crop image. Please try again.");
    }
  };

  const handleContinue = () => {
    if (!photo) {
      alert("Please upload your photo first.");
      return;
    }

    // TODO: Upload the cropped photo to your backend
    // using FormData and your existing /upload endpoint.

    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="w-[95%] sm:w-[90%] max-w-[1200px] mx-auto my-6 md:my-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden py-8 px-5 sm:px-8 md:px-10 lg:px-12">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#8b0038] mb-10">
          Upload Photo
        </h1>

        {/* Upload Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#8b0038] mb-4">
              Add photo & get much better response!
            </h2>

            <p className="text-gray-600 mb-6 leading-7">
              Add a clear photo of yourself to make your
              matrimonial profile more attractive and help
              others get to know you better.
            </p>

            <label
              htmlFor="profilePhoto"
              className="inline-block bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition cursor-pointer"
            >
              Upload Photo
            </label>

            <input
              id="profilePhoto"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handlePhotoChange}
              className="hidden"
            />

            <p className="text-sm text-gray-500 mt-3">
              JPG, PNG or WEBP · Maximum size 5 MB
            </p>

            {photo && (
              <button
                type="button"
                onClick={() => {
                  setCrop({ x: 0, y: 0 });
                  setZoom(1);
                  setCroppedAreaPixels(null);
                  setShowCropper(true);
                }}
                className="mt-4 block mx-auto md:mx-0 text-[#8b0038] underline hover:text-[#70002d]"
              >
                Adjust / Crop Photo
              </button>
            )}
          </div>

          {/* Right Side: Clickable Photo Preview */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              onClick={() => {
                if (preview) {
                  setCrop({ x: 0, y: 0 });
                  setZoom(1);
                  setCroppedAreaPixels(null);
                  setShowCropper(true);
                }
              }}
              className={`relative w-full max-w-[320px] h-[320px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center overflow-hidden bg-white ${
                preview ? "cursor-pointer" : ""
              }`}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Uploaded profile"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm">
                    Click image to crop
                  </div>
                </>
              ) : (
                <div className="text-center px-6">
                  <div className="text-6xl text-gray-300 mb-4">
                    &#128247;
                  </div>

                  <p className="text-gray-500">
                    Your uploaded photo will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Previous & Save Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
          <button
            type="button"
            onClick={() => navigate("/horoscope")}
            className="w-full sm:w-auto border-2 border-[#8b0038] text-[#8b0038] px-8 py-3 rounded-md hover:bg-[#8b0038] hover:text-white transition"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={() => navigate("/successful")}
            className="w-full sm:w-auto bg-[#8b0038] text-white px-8 py-3 rounded-md hover:bg-[#70002d] transition"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Crop Editor Modal */}
      {showCropper && preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl">

            <h2 className="mb-4 text-2xl font-serif text-[#8b0038]">
              Adjust Your Photo
            </h2>

            {/* Cropper */}
            <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden rounded-lg bg-black">
              <Cropper
                image={preview}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="rect"
                showGrid={true}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Drag the image to adjust its position and use the
              slider to zoom in or out.
            </p>

            {/* Zoom Slider */}
            <div className="mt-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700">
                  Zoom
                </label>

                <span className="text-sm text-gray-500">
                  {zoom.toFixed(1)}x
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full accent-[#8b0038]"
              />
            </div>

            {/* Modal Buttons */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowCropper(false)}
                className="w-full sm:w-auto rounded-md border-2 border-[#8b0038] px-5 py-2 text-[#8b0038] hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleApplyCrop}
                className="w-full sm:w-auto rounded-md bg-[#8b0038] px-5 py-2 text-white hover:bg-[#70002d] transition"
              >
                Apply Crop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPhoto;

import os

def rename_images(directory):
    # Supported image file extensions
    supported_extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff")
    
    # List all files in the directory and filter only supported images
    images = [f for f in os.listdir(directory) if f.lower().endswith(supported_extensions)]
    
    # Sort images to ensure consistent renaming order
    images.sort()

    # Rename images
    for index, image in enumerate(images, start=1):
        # Extract the file extension
        extension = os.path.splitext(image)[1]
        
        # Create the new file name
        new_name = f"image{index}{extension}"
        
        # Create the full paths
        old_path = os.path.join(directory, image)
        new_path = os.path.join(directory, new_name)
        
        # Rename the file
        os.rename(old_path, new_path)
        print(f"Renamed: {image} -> {new_name}")

# Specify the directory containing your images
photos_directory = "photos"

# Run the renaming function
if __name__ == "__main__":
    if os.path.exists(photos_directory):
        rename_images(photos_directory)
        print("All images have been renamed successfully!")
    else:
        print(f"Directory '{photos_directory}' does not exist. Please check the path.")

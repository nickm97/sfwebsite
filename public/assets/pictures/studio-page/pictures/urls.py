import os

# Haal het pad op van de map waar het script zich bevindt
current_dir = os.getcwd()

# Definieer de root map voor assets
assets_root = "assets"
filep=current_dir.split('public')
filep = filep[-1].replace('\\', '/')
# Loop door alle .webp bestanden in de huidige map en submappen
for root, dirs, files in os.walk(current_dir):
    for file in files:
        if file.endswith(".webp"):
            # Bereid het bestandspad voor
            # file_path = os.path.relpath(os.path.join(root, file), current_dir)
            
            # # Maak de URL in het gewenste formaat
            url = f"{filep}/{file}"
            alt = "Sanneloes Fotografie Daylight studio La Luz"
            
            # Print de gewenste output
            print(f"{{ url: '{url}', alt: '{alt}' }},")

# import os

# def rename_files_in_folder(folder_path):
#     for filename in os.listdir(folder_path):
#         if filename.lower().endswith(('.jpg', '.png')):
#             new_filename = filename.replace('-', '')
#             if new_filename != filename:  # Alleen hernoemen als er iets verandert
#                 old_path = os.path.join(folder_path, filename)
#                 new_path = os.path.join(folder_path, new_filename)
#                 os.rename(old_path, new_path)
#                 print(f"Hernoemd: {filename} -> {new_filename}")

# # Geef hier het pad naar de folder op
# folder = "C:\\Users\\michni\\Documents\\python_projects\\nuxt_sf_website\\public\\assets\\pictures\\wedding-page\\wedding-050225-05\\pictures"

# rename_files_in_folder(folder)

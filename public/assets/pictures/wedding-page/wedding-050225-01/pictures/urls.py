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
            alt = "Sanneloes fotografie bruiloften"
            
            # Print de gewenste output
            print(f"{{ url: '{url}', alt: '{alt}' }},")

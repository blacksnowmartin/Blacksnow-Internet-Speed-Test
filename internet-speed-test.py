import tkinter as tk
from tkinter import ttk
import speedtest

def get_speed():
    st = speedtest.Speedtest()
    download_speed = st.download()
    upload_speed = st.upload()
    
    return download_speed, upload_speed

def display_speed():
    download_speed, upload_speed = get_speed()
    download_speed_mbps = download_speed / 10**6
    upload_speed_mbps = upload_speed / 10**6

    download_label.config(text=f"Download Speed: {download_speed_mbps:.2f} Mbps")
    upload_label.config(text=f"Upload Speed: {upload_speed_mbps:.2f} Mbps")

# Create the main window
root = tk.Tk()
root.title("Blacksnow Speed Test")
root.geometry("300x200")

# Create and place widgets
title_label = ttk.Label(root, text="Blacksnow Speed Test", font=("Helvetica", 16))
title_label.pack(pady=10)

start_button = ttk.Button(root, text="Start Speed Test", command=display_speed)
start_button.pack(pady=10)

download_label = ttk.Label(root, text="Download Speed: -- Mbps", font=("Helvetica", 12))
download_label.pack(pady=5)

upload_label = ttk.Label(root, text="Upload Speed: -- Mbps", font=("Helvetica", 12))
upload_label.pack(pady=5)

# Run the GUI event loop
root.mainloop()

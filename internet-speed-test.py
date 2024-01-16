import speedtest

def get_speed():
    st = speedtest.Speedtest()
    download_speed = st.download()
    upload_speed = st.upload()
    
    return download_speed, upload_speed

def display_speed(download_speed, upload_speed):
    print("Blacksnow Speed Test Results:")
    print(f"Download Speed: {download_speed / 10**6:.2f} Mbps")
    print(f"Upload Speed: {upload_speed / 10**6:.2f} Mbps")

def main():
    download_speed, upload_speed = get_speed()
    display_speed(download_speed, upload_speed)

if __name__ == "__main__":
    main()

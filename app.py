from flask import Flask, request, render_template, url_for, redirect, session
import requests
# import smtplib as smtp

app = Flask(__name__)

# timeout = 1200
# spacing = ' '
# port = 587
# smtp_server = "smtp.gmail.com" #Server of the email provider
# server = smtp.SMTP(smtp_server, port, timeout=timeout)

# msg = EmailMessage()

# personal_email = "timtudosa6@gmail.com"

# password = "Snakes150!!"


# def connectToEmailClient(request):
#     context = ssl.create_default_context()
  # using SSL to securely send the email
    # server.starttls(context=context)
    # try:
    #     server.login(personal_email, password)

    # #     server = smtp.SMTP(smtp_server, port, timeout=timeout)

    #     format_subject(request.form.get("subject"))

    #     format_sender(request.form.get("email"))

    #     format_body(request.form.get("message"))

    #     server.sendmail(personal_email, email,
    #                     msg.as_string)

    #     server.quit()
    # except Exception as e:
    #     print("Username or password was wrong")
    #     print(e)
    #     retry_email = input("Enter email again:")
    #     retry_password = input("Enter password again")
    #     server.login(retry_email, retry_password)

# def format_subject(subject):
#     msg['Subject'] = subject  # Subject: (Enter Subject)
#     return subject


# def format_sender(email):
#     msg['To'] = email  # To: to_addresss
#     return to_address


# def format_body(message):
#     msg.set_content(message)  # message: (Custom message)
#     return message

@app.route('/', methods=["GET","POST"])
def home_route():
    data = requests.get("http://localhost:4541/contact")
    print(data.json())
    return data
    #request node js server data
    #open url and then get the data in json
    #extract the json and initialize stmp to send emails



if __name__ == "__main__":
    app.run(debug=True, PORT=os.getenv('FLASK_RUN_PORT'))
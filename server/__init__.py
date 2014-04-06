from flask import Flask, request, render_template, url_for, redirect, request

app = Flask(__name__)

if app.debug is not True:   
    import logging
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler('python.log', maxBytes=1024 * 1024 * 100, backupCount=20)
    file_handler.setLevel(logging.ERROR)
    app.logger.setLevel(logging.ERROR)
    app.logger.addHandler(file_handler)

@app.route("/")
def home():
    return render_template('index.html')

#Accept GET request with param user_name (user's name) and location (user's location)
@app.route('/chat', methods=['POST'])
def submit():
	if request.method == 'POST':
		#return request.form['user_name'] + " " + request.form['location']
		return render_template('chat.html', name=request.form['user_name'], 
			loc=request.form['location_name'], locid=request.form['location_id'])

if __name__ == '__main__':
	app.run()
        app.debug = False

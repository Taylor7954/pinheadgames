#flask methods
from flask import Flask, request, render_template, url_for

#main route
app = Flask(__name__)

#routing/mapping python function to home page
#@ signifies a decorator - way to wrap a function and modify its behavior
#connects routed url to return value
@app.route('/')
def index():
    return render_template('index.html')

#routing/mapping python function to user profile page
#@app.route('/profile/<name>')
#Arguments :: Name = Username
#def profile(name):
#    return render_template('profile.html', name=name)

#@app.route('/games')
#def games():
#    return render_template('games.html')

#routing/mapping python function to user login page
@app.route('/login')
def login():
    return render_template('login.html')

#run app when file is directly called
if __name__ == "__main__":
    app.run()

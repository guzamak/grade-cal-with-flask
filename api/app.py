from flask import Flask,render_template,jsonify,request,url_for
import json
from .my_package import cal

app = Flask(__name__)
app.config['SECRET_KEY'] = 'SECRET_KEY'

@app.route('/')
def HOME():
    return render_template('index.html')

@app.route('/grade',methods=["post"])
def show():
    num = int(request.values.get('num'))
    sub = json.loads(request.values.get('sub'))
    score = json.loads(request.values.get('score'))
    credit = json.loads(request.values.get('credit'))
    g = cal.grade(score)
    allg = cal.allgrade(g,credit,num)
    alls = cal.allscore(score,num)
    return jsonify({"g":g,"allg":allg,"alls":alls})


    
if __name__ == "__main__":
    app.run(debug=True)
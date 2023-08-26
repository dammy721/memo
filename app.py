from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# メモを保存するためのリスト
notes = []

@app.route('/')
def index():
    return render_template('index.html', notes=notes)

@app.route('/add_note', methods=['POST'])
def add_note():
    new_note = request.form.get('note')
    if new_note:
        notes.append(new_note)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, render_template
import subprocess

app = Flask(__name__, template_folder='templates')

@app.route('/', methods=['GET', 'POST'])
def run_code():
    if request.method == 'POST':
        submitted_code = request.form.get('code', '')  # Get the submitted code or an empty string
        # Write the submitted code to a file named 'code.py'
        with open('demo.py', 'w') as f:
            f.write(submitted_code)
        # Execute the code.py file and capture the output and errors
        result = subprocess.run(['python', 'demo.py'], capture_output=True, text=True)
        output = result.stdout + result.stderr  # Concatenate stdout and stderr
        # Pass the output to the template for displaying
        return render_template('template.html', submitted_code=submitted_code, output=output)
    
    return render_template('template.html', submitted_code='')

if __name__ == '__main__':
    app.run(debug=True)

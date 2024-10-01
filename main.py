import pdfkit
from jinja2 import Template
from IPython.display import HTML

# Corrected template string with proper HTML tags
# template_string = """
# <!DOCTYPE html>
# <html>
# <head>
#     <title>{{ title }}</title>
# </head>
# <body>
#     <h1>Hello, {{ name }}!</h1>
#     <p>This is a sample document generated using Jinja</p>
# </body>
# </html>
# """

with open('template2.html', 'r') as f:
    template_string = f.read()

# Create a template using Jinja2
template = Template(template_string)

# Data to pass into the template
data = {'title': 'Sample Document', 'name': 'krishna'}

# Render the document
rendered_document = template.render(data)

# html_path = f'xx.html'
html_file = open("./output.html", 'w')
html_file.write(rendered_document)
html_file.close()


def html2pdf(html_path, pdf_path):
    """
    Convert html to pdf using pdfkit which is a wrapper of wkhtmltopdf
    """
    options = {
        'page-size': 'Letter',
        'margin-top': '0.35in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None,
        'enable-local-file-access': None
    }
    with open(html_path) as f:
        pdfkit.from_file(f, pdf_path, options=options)


# Display the HTML output

html2pdf("./output.html", "./output.pdf")
# HTML(rendered_document)

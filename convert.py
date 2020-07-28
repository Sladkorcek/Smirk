import argparse
import os.path

from jinja2 import Template

import markdown
from interactive_block import InlineInteractiveBlockExtension

parser = argparse.ArgumentParser(description='Convert file from markdown to html.')
parser.add_argument('input_file', metavar='INPUT_FILE', type=str, nargs=1, help='path to the markdown file that you want to convert to html')
parser.add_argument('--output-file', '-o', type=str, nargs=1, dest='output_file', help='path to the output html file that will be written')

arguments = parser.parse_args()

input_file_path = arguments.input_file[0]
output_file_path = arguments.output_file

# First, read the markdown from input file
with open(input_file_path, 'r', encoding='utf-8') as input_file:
    file_content = input_file.read()

# Then, use the markdown library to convert markdown to html. Use a custom
# extension that can parse interactive code blocks.
html = markdown.markdown(file_content, extensions=[
    InlineInteractiveBlockExtension()
])

# If output file is None, the user has not supplied the output file path.
# Construct the output file name from input file name by replacing file
# extension ".md" with ".html"
if output_file_path is None:
    path_data = os.path.splitext(input_file_path)
    if len(path_data) > 1:
        file_name, file_extension = path_data
    else:
        file_name = input_file_path
    output_file_path = '{}.html'.format(file_name)
else:
    output_file_path = output_file_path[0]

# Load the template file and read its contents
with open('templates/notebook_template.html', 'r', encoding='utf-8') as template_file:
    template_content = template_file.read()

# Construct a new Jinja2 template and insert converted html
template = Template(template_content)
rendered = template.render(content=html, title='Notebook Test')

# Write the file to output path
with open(output_file_path, 'w', encoding='utf-8') as output_file:
    output_file.write(rendered)
from jinja2 import Template

template = Template('Hello {{ name }}!')
temaple.render(name='John Doe')
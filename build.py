import sys
import os

VERSION = '0.1.0'

def file_read_text(path):
    c = open(path.replace('/', os.sep), mode='rt', newline='\n')
    t = c.read()
    c.close()
    return t

def file_write_text(path, content):
    c = open(path.replace('/', os.sep), mode='wt', newline='\n', encoding='utf-8')
    c.write(content)
    c.close()

_EXT = []
def get_extensions():
    if len(_EXT) == 0:
        manifest = file_read_text('extensions/manifest.txt')
        for line in manifest.split('\n'):
            line = line.strip()
            if line != '':
                _EXT.append(line)
        _EXT.sort()

    return _EXT[:]

def do_macro_line_swaps(code, macros):
    macro_list = list(macros.keys())
    code_lines = code.split('\n')

    macro_line_num = {}
    for i in range(len(code_lines)):
        line = code_lines[i]
        if '%%%' in line:
            for macro in macro_list:
                if '%%%' + macro + '%%%' in line:
                    macro_line_num[macro] = i

    for macro in macro_list:
        code_lines[macro_line_num[macro]] = macros[macro]

    return '\n'.join(code_lines)

def generate_web_dist(is_plexi_os = True):
    if not is_plexi_os:
        raise Exception("TODO: regular web version")

    code = file_read_text('templates/visiscript_plexios.js')

    ext_data = []
    for ext in get_extensions():
        ext_data.append(file_read_text('extensions/web/' + ext + '.js'))

    code = do_macro_line_swaps(code, {
        'VERSION': "'" + VERSION + "'",
        'EXTENSIONS': '\n'.join(ext_data)
    })

    file_write_text('dist/VisiScript_plexios_' + VERSION.replace('.', '_') + '.js', code.strip() + '\n')

def main(args):
    generate_web_dist()
    print("Done")

if __name__ == '__main__':
    main(sys.argv[1:])

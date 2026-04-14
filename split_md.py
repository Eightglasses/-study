import os
import re

def split_markdown():
    source_file = '/Users/songzhiyu/test/-study/初级_社会工作综合能力.md'
    target_dir = '/Users/songzhiyu/test/-study/comprehensive-ability'
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 匹配以 # 第X章 开头的标题
    chapters = re.split(r'(?=\n# 第[一二三四五六七八九十]+章：)', content)
    
    # 第一个元素可能是前言或空字符串，处理一下
    preface = chapters[0].strip()
    if preface and not preface.startswith('# 第'):
        with open(os.path.join(target_dir, 'index.md'), 'w', encoding='utf-8') as f:
            f.write(preface + '\n')
            
    chapter_count = 1
    for chapter in chapters:
        chapter = chapter.strip()
        if chapter.startswith('# 第'):
            filename = f'chapter{chapter_count}.md'
            with open(os.path.join(target_dir, filename), 'w', encoding='utf-8') as f:
                f.write(chapter + '\n')
            print(f'Created {filename}')
            chapter_count += 1

if __name__ == '__main__':
    split_markdown()

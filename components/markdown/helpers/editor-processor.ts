import type {JSONContent} from "novel";

function wrapIn(tag: string, content: string, attrs: Record<string, string> = {}): string {
  let attrString = '';
  for (const key in attrs) {
    attrString += ` ${key}="${attrs[key]}"`;
  }
  return `<${tag}${attrString}>${content}</${tag}>`;
}

type Mark = {
  type: string;
  attrs?: Record<string, string>;
};

function convertContentToHtml(content: Array<JSONContent>): string {
  let html = '';
  for (const item of content) {
    switch (item.type) {
      case 'text':
        let marks: Mark[] = [];
        if (item.marks !== undefined) {
          for (const mark of item.marks) {
            switch (mark.type) {
              case 'bold':
                marks.push({ type: 'strong' });
                break;
              case 'italic':
                marks.push({ type: 'em' });
                break;
              case 'underline':
                marks.push({ type: 'u' });
                break;
              case 'code':
                marks.push({ type: 'code' });
                break;
              case 'strike':
                marks.push({ type: 's' });
                break;
              case 'link':
                if(mark.attrs === undefined || mark.attrs.href === undefined) {
                  break;
                }
                const attrs = {
                  href: mark.attrs.href,
                  target: '_blank',
                  rel: 'noopener noreferrer nofollow',
                  class:"text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
                }
                marks.push({ type: 'a', attrs });
                break;
              default:
                console.error('Unknown mark type:', mark.type);
                break;
            }
          }
        }
        let text = item.text || '';
        for (const mark of marks) {
          text = wrapIn(mark.type, text, mark.attrs);
        }

        html += text;
        break;
      case 'hardBreak':
        html += '<br>';
        break;
      default:
        console.error('Unknown content type:', item.type);
        break;
    }
  }

  return html;
}

function convertToHtml(item: JSONContent): string {
  try {
    switch (item.type) {
      case 'heading':
        if (item.attrs === undefined || item.content === undefined) {
          break;
        }
        return `<h${item.attrs.level}>${convertContentToHtml(item.content)}</h${item.attrs.level}>`;
      case 'paragraph':
        let content = "";
        if (item.content !== undefined) {
          content = convertContentToHtml(item.content);
        } else {
          content = "";
        }
        return `<p>${content}</p>`;
      case 'bulletList':
        if (item.content === undefined) {
          break;
        }
        return `<ul>${convertBulletListToHtml(item.content)}</ul>`;
      case 'taskList':
        if(item.content === undefined) {
          break;
        }
        return `<ul type="taskList">${convertTaskListToHtml(item.content)}</ul>`;
      default:
        console.error('Unknown main type:', item.type);
    }
  } catch (e) {
    console.error(e);
  }

  return '';
}

const convertBulletListToHtml = (content: Array<JSONContent>): string => {
  let html = '';
  for (const item of content) {
    switch (item.type) {
      case 'listItem':
        if (item.content === undefined) {
          break;
        }
        let subHtml = '';
        for (const subItem of item.content) {
          subHtml += convertToHtml(subItem);
        }
        html += `<li>${subHtml}</li>`;
        break;
      default:
        console.error('Unknown sub-type:', item.type);
        break;
    }
  }
  return html;
}

const convertTaskListToHtml = (content: Array<JSONContent>): string => {
  let html = '';
  for (const item of content) {
    switch (item.type) {
      case 'taskItem':
        if (item.content === undefined) {
          break;
        }
        let subHtml = '';
        for (const subItem of item.content) {
          subHtml += convertToHtml(subItem);
        }
        html += `<li class="flex gap-2 items-start my-4">${subHtml}</li>`;
        break;
      default:
        console.error('Unknown sub-type:', item.type);
        break;
    }
  }
  return html;

}

export function convertNovelToHtml(novelContent: JSONContent): string {
  let html = '';

  if (novelContent.type !== 'doc' || novelContent.content === undefined) {
    return html;
  }

  for (const item of novelContent.content) {
    html += convertToHtml(item);
  }
  return html;
}

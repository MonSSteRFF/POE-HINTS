type t_cn = (
  input:
    | string[]
    | string
    | (() => string[] | string)
    | Array<string | (() => string[] | string)>,
) => string;

const cn: t_cn = (input) => {
  if (typeof input === 'string') {
    return input.trim();
  }

  if (Array.isArray(input)) {
    const flattenedArray = input.map((item) => {
      if (typeof item === 'string') {
        return item.trim();
      } else if (typeof item === 'function') {
        const result = item();
        if (typeof result === 'string') {
          return result.trim();
        } else {
          return result.map((str) => str.trim()).join(' ');
        }
      }
      return '';
    });

    return flattenedArray.filter((item) => item !== '').join(' ');
  }

  if (typeof input === 'function') {
    const result = input();
    if (typeof result === 'string') {
      return result.trim();
    } else {
      return result.map((str) => str.trim()).join(' ');
    }
  }

  return '';
};

export { cn };

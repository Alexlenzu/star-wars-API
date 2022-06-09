export const checkData = (column) => {
  switch (column) {
    case 'n/a':
      return false;

    case 'N/A':
      return false;

    case 'unknown':
      return false;

    case undefined:
      return false;

    case null:
      return false;

    default:
      return column;
  }
};

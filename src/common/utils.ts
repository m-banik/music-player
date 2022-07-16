export const fetchErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    alert(error.message);
  } else {
    console.log('The input is not of a proper Error object format');
  }
};

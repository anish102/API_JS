const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export default asyncHandler;

// const asyncHandler = (fn) => {
//     async () => {
//       try {
//         await fn(req, res, next);
//       } catch (error) {
//         res
//           .status(err.code || 500)
//           .json({ succeess: false, message: err.message });
//       }
//     };
//   };

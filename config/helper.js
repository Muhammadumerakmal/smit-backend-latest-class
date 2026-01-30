const RespondObj = (issuccesful = false, message = "Internal server error", data = null, error = null) => {
  return {
    success: issuccesful,
    message,
    data,
    error
  };
};

module.exports = { RespondObj };
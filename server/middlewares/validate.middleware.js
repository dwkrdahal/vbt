const validate = (schema) => async (req, res, next) => {

  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
    
  } catch (err) {
    const status = 422;
    // console.log(err);
    const message = "fill up the form properly"
    const extraMessage =  err.errors[0].message;

    const error = {
      status,
      message,
      extraMessage
    }

    // console.log(err);
    // res.status(400).json({msg: err})

    //sending error via middleware
    next(error);

  }
}

export default validate;
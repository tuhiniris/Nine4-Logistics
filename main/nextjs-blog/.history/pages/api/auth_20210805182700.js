function authUser(db, email, password, hash, callback) {
    const collection = db.collection('user');
    bcrypt.compare(password, hash, callback);
  }

  if (match) {
    const token = jwt.sign(
      {userId: user.userId, email: user.email},
      jwtSecret,
      {
        expiresIn: 3000, //50 minutes
      },
    );
    res.status(200).json({token});
    return;
}  
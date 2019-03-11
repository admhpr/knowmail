 const passport = require('passport');
 const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const mongoose = require('mongoose');


 const User = mongoose.model('users');

 passport.serializeUser((user, done) => {
     done(null, user.id);
 });

 // turn user id into a user object
 passport.deserializeUser((id, done) => {
     User.findById(id).then(user => {
         done(null, user);
     })
 });



 passport.use(
     new GoogleStrategy(PassportHelpers().strategyConfig['google'], async (accessToken, refreshToken, profile, done) => {
         const user = await User.findOne({
             googleId: profile.id
         })

         if (!user) {
             PassportHelpers(done).createNewUser(profile.id)
         }
         done(null, user)

     })
 );

 function PassportHelpers(done) {
     return {
         strategyConfig: {
             google: {
                 clientID: process.env.GOOGLE_CLIENT_ID,
                 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                 callbackURL: '/auth/google/callback',
                 proxy: true,
             }

         },
         createNewUser: async (googleId = null) => {
             if (!googleId) {
                 return
             }
             const newUser = await new User({
                 googleId
             }).save()

             done(null, newUser)

         }
     }
 }
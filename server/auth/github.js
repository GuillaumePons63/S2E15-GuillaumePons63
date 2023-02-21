const passport = require('passport');
const { User } = require('../app/models');
const GitHubStrategy = require('passport-github2').Strategy;

function useGithubAuth() {
    return passport.use(
        new GitHubStrategy(
            {
                clientID: 'd5216ebdf06585ccf1e8',
                clientSecret: 'f4595d8d2c63f0c46ba136e422d6ec593e4d008b',
                callbackURL: '/api/auth/github/callback',
            },
            async function (accessToken, refreshToken, profile, done) {
                const user = await User.findOrCreate({
                    where: { github_id: profile.id },
                });

                return done(null, user);
            }
        )
    );
}

module.exports = useGithubAuth;

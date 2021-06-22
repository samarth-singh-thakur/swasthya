const user = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        user_id: {
            primaryKey: true,
            type: Sequelize.STRING,

        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        }
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });


    return user;
};


const doctor = (sequelize, Sequelize) => {
    const user = sequelize.define("doctors", {
        user_id: {
            primaryKey: true,
            type: Sequelize.STRING,

        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        },
        currentPosting: {
            type: Sequelize.STRING
        },
        specialization: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        }
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });

    return doctor;
};

const scoreCard = (sequelize, Sequelize) => {
    const scoreCard = sequelize.define("scoreCards", {

        userID: {
            type: Sequelize.STRING
        },
        height: {
            type: Sequelize.INTEGER
        },
        weight: {
            type: Sequelize.INTEGER
        },
        googleFitScore: {
            type: Sequelize.INTEGER
        }

    }, {
        freezeTableName: true
    })
    return scoreCard
}

const healthJournal = (sequelize, Sequelize) => {
    const healthJournal = sequelize.define("healthJournals", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        comment: {
            type: Sequelize.TEXT
        }

    })
}

module.exports = {
    user, healthJournal, scoreCard, doctor
}
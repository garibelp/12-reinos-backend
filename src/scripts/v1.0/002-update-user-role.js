db.users.updateMany({}, { $rename: { permissions: 'roles' } });

users_db_file = 'users_db.csv'
users_firebase_file = 'users_firebase.csv'

with open(users_db_file, 'r') as f:
    lines = f.readlines()
    users_db = []
    for i in lines:
        email = i.split(';')[0]
        users_db.append(email)

with open(users_firebase_file, 'r') as f:
    lines = f.readlines()
    users_firebase = []
    for i in lines:
        email = i.split(',')[1]
        users_firebase.append(email)
for i in users_firebase:
    if i not in users_db:
        print(i)
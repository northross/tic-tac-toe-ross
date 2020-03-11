'use strict'

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --date '{
    "passwords" {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
  }
}'

echo

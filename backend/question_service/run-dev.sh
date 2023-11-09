# read env var from dev env file
set -o allexport
source ../../docker-compose-dev.env
set +o allexport

python -m uvicorn main:app --reload --port 5001 --host localhost

# Console message:
echo "Running tests..."

# Initialize exit code to 0:
exit_code=0

# Shut down any running containers:
docker-compose -f docker-compose.test.yml down

# Rebuild all containers:
docker-compose -f docker-compose.test.yml build

# Spin up the API instance:
docker-compose -f docker-compose.test.yml up -d api-demo

# Spin up a container for the service tests:
docker-compose -f docker-compose.test.yml run api-tests

# Set the exit code to the result of running
# the service tests:
exit_code=$?

# Once the tests finish running, shut everything down:
docker-compose -f docker-compose.test.yml down -v

exit $exit_code;

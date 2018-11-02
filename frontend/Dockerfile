# maven image with java 8 
FROM maven:3.5.2-jdk-8-alpine

# build project with maven
COPY pom.xml /tmp/
COPY src /tmp/src/
WORKDIR /tmp/
RUN mvn clean install

COPY --from=0 /tmp/target/backend-0.0.1-SNAPSHOT.jar backend.jar


## Setup
Create `.env` with following environment variables. (Replace each values with whatever you want)

```.env
WORDPRESS_SITE_URL=localhost:8888
WORDPRESS_SITE_TITLE=sample
WORDPRESS_ADMIN_USER=admin
WORDPRESS_ADMIN_PASSWORD=password
WORDPRESS_ADMIN_EMAIL=example@example.com
WORDPRESS_DB_HOST=db
WORDPRESS_DB_USER=user
WORDPRESS_DB_PASSWORD=password
WORDPRESS_DB_NAME=wp_theme_boilerplate
WORDPRESS_THEME_NAME=wp-theme-boilerplate
MYSQL_DATABASE=wp_theme_boilerplate
MYSQL_USER=wp_theme_boilerplate
MYSQL_PASSWORD=password
MYSQL_RANDOM_ROOT_PASSWORD='1'
```

## Build
`docker-compose build`

## Run
`docker-compose up`

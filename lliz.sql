CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_key VARCHAR(255),
    PRIMARY KEY (user_id)
);

CREATE TABLE favourites (
    favourite_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    city_name VARCHAR(255),
    PRIMARY KEY (favourite_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE posts (
    post_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_content VARCHAR(255) NOT NULL,
    post_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    post_updated_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    review_content VARCHAR(255) NOT NULL,
    review_city VARCHAR(255) NOT NULL,
    review_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    review_updated_at TIMESTAMP NULL DEFAULT NULL,
    review_rating INT NOT NULL,
    PRIMARY KEY (review_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

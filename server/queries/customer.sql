CREATE TABLE customers(
   id  INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255),
   accountno BIGINT,
   secretkey INT,
   balanceAmt BIGINT,
   withdrawAmt BIGINT,
   depositAmt BIGINT,
   deposit_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   withdraw_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

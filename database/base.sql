CREATE SCHEMA IF NOT EXISTS `alfabeta` DEFAULT CHARACTER SET utf8 ;
USE `alfabeta` ;

CREATE TABLE IF NOT EXISTS `alfabeta`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL,
  `edad` INT NOT NULL,
  `contraseña` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
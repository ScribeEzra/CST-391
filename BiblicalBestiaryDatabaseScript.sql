DROP DATABASE IF EXISTS bestiary;
CREATE DATABASE  IF NOT EXISTS `bestiary` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bestiary`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `creatures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creatures` (
  `id` int(11) UNIQUE NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `hp` int(11) NOT NULL,
  `atk` int(11) NOT NULL,
  `def` int(11) NOT NULL,
  `unique` BOOLEAN,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `creatures` WRITE;
/*!40000 ALTER TABLE `creatures` DISABLE KEYS */;
INSERT INTO `creatures` VALUES 
	(1,'Leviathan', 'A massive sea serpent with a seemingly unending amount of teeth, believed by some to have possibly been the possessed serpent in the Garden of Eden',999999, 280, 500, true),
	(2,'Behemoth', 'A large land-dewlling creature that, despite its impressive jaw strength, eats grass.',5000, 100, 100, false),
    (3,'Serpant', 'A reptilian creature often associated with the devil',666, 50, 10, false),
    (4,'Archangel Michael', 'The most well-known angel who fought Jacob on a mountain',100000, 300, 250, true),
    (5,'Sucubus', 'A demon who\'s specialty is to seduce human men.',1000, 75, 25, false),
    (6,'Incubus', 'A demon who\'s specialty is to seduce human women.',1000, 75, 25, false),
    (7,'Seraphim', 'An angel known to have six wings, two that cover the face, two that cover the feet, and two used to fly',900, 50, 50, false),
    (8,'Cherubim', 'An angel known to have multiple animal heads as well as one human head',900, 50, 50, false),
    (9,'Nephalim', 'A giant creature born from a union of angel and human',10000, 100, 100, false),
    (10,'Watcher', 'One of a handful of fallen angels responsible for the creation of the Nephilim',10000, 150, 150, false)
    ;
/*!40000 ALTER TABLE `creatures` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

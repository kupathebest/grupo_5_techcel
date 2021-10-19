-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: techcel
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatars`
--

DROP TABLE IF EXISTS `avatars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `batteries`
--

DROP TABLE IF EXISTS `batteries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batteries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fastCharge` varchar(200) DEFAULT NULL,
  `wirelessCharge` varchar(200) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cameras`
--

DROP TABLE IF EXISTS `cameras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cameras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rearCamera` varchar(255) DEFAULT NULL,
  `frontalCamera` varchar(255) DEFAULT NULL,
  `videoCamera` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` decimal(8,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `colours`
--

DROP TABLE IF EXISTS `colours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `connectivities`
--

DROP TABLE IF EXISTS `connectivities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `connectivities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wifi` varchar(255) DEFAULT NULL,
  `bluethoot` varchar(255) DEFAULT NULL,
  `gps` varchar(255) DEFAULT NULL,
  `usb` varchar(255) DEFAULT NULL,
  `nfc` varchar(255) DEFAULT NULL,
  `infrared` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `displays`
--

DROP TABLE IF EXISTS `displays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `displays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `displayType` varchar(255) DEFAULT NULL,
  `displaySize` varchar(255) DEFAULT NULL,
  `displayResolution` varchar(255) DEFAULT NULL,
  `density` varchar(255) DEFAULT NULL,
  `protection` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mainfeatures`
--

DROP TABLE IF EXISTS `mainfeatures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mainfeatures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `displayP` varchar(255) DEFAULT NULL,
  `processorP` varchar(255) DEFAULT NULL,
  `memoryP` varchar(255) DEFAULT NULL,
  `storageP` varchar(255) DEFAULT NULL,
  `expansionP` varchar(255) DEFAULT NULL,
  `cameraP` varchar(255) DEFAULT NULL,
  `batteryP` varchar(255) DEFAULT NULL,
  `osP` varchar(255) DEFAULT NULL,
  `profileP` varchar(255) DEFAULT NULL,
  `weightP` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nets`
--

DROP TABLE IF EXISTS `nets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `twoG` varchar(255) DEFAULT NULL,
  `threeG` varchar(255) DEFAULT NULL,
  `fourG` varchar(255) DEFAULT NULL,
  `fiveG` varchar(255) DEFAULT NULL,
  `gprs` varchar(255) DEFAULT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shortName` varchar(255) DEFAULT NULL,
  `longName` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `price` decimal(8,0) DEFAULT NULL,
  `edge` varchar(255) DEFAULT NULL,
  `colourId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `mainFeatureId` int DEFAULT NULL,
  `displayId` int DEFAULT NULL,
  `cameraId` int DEFAULT NULL,
  `netId` int DEFAULT NULL,
  `connectivityId` int DEFAULT NULL,
  `batteryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `colourId` (`colourId`),
  KEY `categoryId` (`categoryId`),
  KEY `mainFeatureId` (`mainFeatureId`),
  KEY `displayId` (`displayId`),
  KEY `cameraId` (`cameraId`),
  KEY `netId` (`netId`),
  KEY `connectivityId` (`connectivityId`),
  KEY `batteryId` (`batteryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`colourId`) REFERENCES `colours` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`mainFeatureId`) REFERENCES `mainfeatures` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`displayId`) REFERENCES `displays` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`cameraId`) REFERENCES `cameras` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_6` FOREIGN KEY (`netId`) REFERENCES `nets` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_7` FOREIGN KEY (`connectivityId`) REFERENCES `connectivities` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_8` FOREIGN KEY (`batteryId`) REFERENCES `batteries` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rolId` int DEFAULT NULL,
  `avatarId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  KEY `avatarId` (`avatarId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`avatarId`) REFERENCES `avatars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-18 23:56:42

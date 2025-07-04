terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.0.0-beta3"
    }
    archive = {
      source = "hashicorp/archive"
      version = "2.7.1"
    }    
  }
  required_version = ">= 0.13"
}

provider "aws" {
  region = "eu-west-1"
}

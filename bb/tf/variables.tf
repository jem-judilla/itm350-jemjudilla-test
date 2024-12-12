variable "ami" {
  type = string
}

variable "cluster_name" {
  type = string
}

variable "container_image" {
  type = string
}

variable "container_port" {
  type = number
}

variable "instance_name_prefix" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "lab_role" {
  type = string
}

variable "region" {
  type = string
}

variable "vpc_cidr" {
  type = string
}

variable "vpc_prefix" {
  type = string
}

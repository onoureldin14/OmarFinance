terraform {
  backend "s3" {
    bucket       = "tfstate-omarfinance-3e75e52e"
    key          = "infra/terraform.tfstate"
    region       = "eu-west-1"
    use_lockfile = true
  }
}

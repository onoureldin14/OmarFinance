terraform {
  backend "s3" {
    bucket = "tfstate-omarfinance-caf1725c"
    key    = "infra/terraform.tfstate"
    region = "eu-west-1"
    use_lockfile = true
  }
}
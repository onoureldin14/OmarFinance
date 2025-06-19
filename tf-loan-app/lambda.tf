resource "aws_lambda_function" "loan_handler" {
  filename         = "lambda.zip"
  function_name    = "loanHandler"
  handler          = "index.handler"
  runtime          = "nodejs22.x"
  source_code_hash = filebase64sha256("lambda.zip")

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.loan_table.name
    }
  }

  role = aws_iam_role.lambda_exec_role.arn
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.loan_handler.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.loan_api.execution_arn}/*/*"
}

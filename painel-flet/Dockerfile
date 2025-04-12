FROM python:3.11-slim

WORKDIR /app
COPY . .

RUN pip install flet

EXPOSE 8550
CMD ["python", "app.py"]


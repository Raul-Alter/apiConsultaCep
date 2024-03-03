package com.api.lp3.service;

import com.api.lp3.dto.EnderecoDTO;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class EnderecoService {
    public EnderecoDTO consultaCep(String cep) throws IOException, InterruptedException {
        try {
            URI url = URI.create("https://viacep.com.br/ws/" + cep + "/json/");

            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder().uri(url).build();

            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

            return new Gson().fromJson(response.body(), EnderecoDTO.class);
        } catch (Exception e) {
            throw e;
        }
    }
}

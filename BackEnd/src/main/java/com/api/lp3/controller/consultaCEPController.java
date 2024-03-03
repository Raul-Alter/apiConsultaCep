package com.api.lp3.controller;

import com.api.lp3.dto.EnderecoDTO;
import com.api.lp3.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/consulta")
public class consultaCEPController {
    @Autowired
    EnderecoService enderecoService;

    @GetMapping("/cep/{cep}")
    public ResponseEntity<EnderecoDTO> consultaCEP(@PathVariable(name = "cep") String cep) throws IOException, InterruptedException {
        EnderecoDTO cepA = enderecoService.consultaCep(cep);
        return ResponseEntity.ok(cepA);
    }
}

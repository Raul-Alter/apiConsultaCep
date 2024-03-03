package com.api.lp3.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CepDTO {
    private String cep;
    private String tipoCep;
    private String subTipoCep;
    private String uf;
    private String cidade;
    private String bairro;
    private String endereco;
    private String complemento;
    private String codigoIBGE;
}
